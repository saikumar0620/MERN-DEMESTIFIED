
const PrimaryButton = (props) => {
    // console.log(props);
  return (
    <button type={props?.type==="submit"? "submit":"button"} className="bg-rose-500 px-2 py-3 text-white rounded-2xl" onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default PrimaryButton;