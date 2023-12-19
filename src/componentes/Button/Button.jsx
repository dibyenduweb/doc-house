

const Button = ({btnName}) => {
    return(
        <div>
            <button className="btn border-0 text-white font-semibold bg-[#F7A582]">{btnName}</button>
        </div>
    )}
export default Button;


// ({heading, subHeading}) => {
//     return (
//         <div className="mx-auto text-center md:w-4/12 my-8">
//             <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
//             <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
//         </div>