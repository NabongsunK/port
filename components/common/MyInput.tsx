interface MyInputProps<T extends string | number | readonly string[]> {
  label?: string;
  inputType?: string;
  placeholder?: string;
  coverClass?: string;
  labelClass?: string;
  inputClass?: string;
  coverStyle?: object;
  labelStyle?: object;
  inputStyle?: object;
  direction?: "left" | "right" | "center";
  state: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
}

const MyInput = <T extends number | string | readonly string[]>({
  label,
  //input
  inputType,
  placeholder,
  // class
  coverClass,
  labelClass,
  inputClass,
  // style
  coverStyle,
  labelStyle,
  inputStyle,
  direction = "left",
  // bind
  state,
  setter,
}: MyInputProps<T>) => {
  const inputHandler = (target: HTMLInputElement) => {
    if (inputType.toLowerCase() === "number") {
      setter(Number(target.value) as T);
    } else {
      setter(target.value as T);
    }
  };

  return (
    <>
      <div
        className={`cover flex items-center relative ${coverClass}`}
        style={coverStyle}
      >
        <label className={`block ${labelClass}`} style={labelStyle}>
          {label}
        </label>
        <div className="relative w-full mr-3">
          <input
            type={inputType}
            className={`${direction} w-full ${inputClass}`}
            style={inputStyle}
            placeholder={placeholder}
            value={state}
            onChange={(e) => inputHandler(e.target)}
          />
          <div></div>
        </div>
      </div>
      <style jsx>{`
        .cover input {
          box-sizing: border-box;
          padding: 0.625rem;
          border: 1px solid transparent;
          border-bottom: 1px solid;

          background-color: var(--my--background);
        }

        .cover input + div {
          background: none repeat scroll 0 0 transparent;
          position: absolute;
          background: var(--my--heading);
          transition: width 0.5s ease 0s, left 0.5s ease 0s;

          width: 0;
          height: 2px;
          left: 0;
          bottom: 0;
        }

        .cover input.right + div {
          left: auto;
          right: 0;
        }

        .cover input.center + div {
          left: 50%;
        }

        .cover input:hover + div {
          width: 100%;
        }

        .cover input:focus + div {
          width: 100%;
        }

        .cover input.center:hover + div {
          left: 0;
        }

        .cover input.center:focus + div {
          left: 0;
        }
      `}</style>
    </>
  );
};

export default MyInput;
