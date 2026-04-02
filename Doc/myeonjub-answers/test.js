// 같은 흐름(성공 시 로그, 실패 시 에러)을 두 방식으로 비교
// 실행할 때는 아래 맨 아래 주석 중 하나만 풀고 돌리면 됨.

// --- 1) async/await + try/catch ---
async function loadUserParallel() {
  try {
    const p1 = fetch("/api/user");
    const p2 = fetch("/api/user2"); // 위 요청 기다리지 않고 바로 시작
    const [res, res2] = await Promise.all([p1, p2]);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    if (!res2.ok) throw new Error(`HTTP ${res2.status}`);
    const [data, data2] = await Promise.all([res.json(), res2.json()]);
    console.log("user", data);
    console.log("user2", data2);
  } catch (e) {
    console.error("failed", e);
  }
}

// --- 2) Promise 체인 .then() / .catch() ---
function loadUserWithThenCatch() {
  fetch("/api/user")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log("user", data);
    })
    .catch((e) => {
      console.error("failed", e);
    });

  fetch("/api/user2")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log("user2", data);
    })
    .catch((e) => {
      console.error("failed", e);
    });
}

// void loadUserWithAsyncAwait();
// loadUserWithThenCatch();

// user1 → user2 의존: async/await
async function loadUser2DependsOnUser1() {
  try {
    const res1 = await fetch("/api/user");
    if (!res1.ok) throw new Error(`user1 HTTP ${res1.status}`);
    const user1 = await res1.json();
    // user1 데이터로 두 번째 요청 구성 (URL, 헤더, 바디 등)
    const res2 = await fetch("/api/user2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ parentId: user1.id }),
    });
    if (!res2.ok) throw new Error(`user2 HTTP ${res2.status}`);
    const user2 = await res2.json();
    console.log(user1, user2);
  } catch (e) {
    console.error("failed", e);
  }
}

// 위와 동일 흐름: Promise 체인 (마지막에 user1·user2 둘 다 필요해서 객체로 묶어 전달)
function loadUser2DependsOnUser1Chain() {
  fetch("/api/user")
    .then((res1) => {
      if (!res1.ok) throw new Error(`user1 HTTP ${res1.status}`);
      return res1.json();
    })
    .then((user1) =>
      fetch("/api/user2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parentId: user1.id }),
      }).then((res2) => {
        if (!res2.ok) throw new Error(`user2 HTTP ${res2.status}`);
        return res2.json().then((user2) => ({ user1, user2 }));
      })
    )
    .then(({ user1, user2 }) => {
      console.log(user1, user2);
    })
    .catch((e) => {
      console.error("failed", e);
    });
}
