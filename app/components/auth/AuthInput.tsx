interface AuthInputProps {
  label: string;
  value: any;
  type?: "text" | "email" | "password";
  required?: boolean;
  doNotRender?: boolean;
  changeValue: (newValue: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.doNotRender ? null : (
    <div className={`flex flex-col mt-4`}>
      <label>{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.changeValue(e.target.value)}
        required={props.required}
        className={`
          px-4 py-3 rounded-lg bg-purple-100 mt-2 
          border focus:border-purple-500 focus:outline-none
          focus:bg-white
        `}
      />
    </div>
  );
}
