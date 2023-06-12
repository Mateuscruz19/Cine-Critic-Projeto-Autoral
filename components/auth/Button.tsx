export default function Button(props: any) {
  return (
    <button className="bg-blue-600 py-3 text-white rounded-md w-full mt-10 hover:bg-orange-700 transition">
      {props.variant === "login" ? "Login" : "Registrar"}
    </button>
  );
}
