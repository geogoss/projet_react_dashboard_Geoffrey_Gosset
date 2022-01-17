import './Card.css'


export default function Card(props) {
    return (
        <div className="plan col-3 d-flex align-items-end p-0 m-1 position-relative">
            <div className='carteSvg'>{props.svgName} </div>
            <div className="carte m-0 w-100">
                <div className="carteHeader d-flex justify-content-around text-center ">
                    <p className='carteP1'>{props.txt}</p>
                    <a className='carteA text-decoration-none' href="#">...</a>
                </div>
                <p className='carteP2 my-0 ps-3'>{props.hrs}</p>
                <p className='carteP3 my-0 ps-3'>{props.txt2} </p>

            </div>
        </div>
    )
}
