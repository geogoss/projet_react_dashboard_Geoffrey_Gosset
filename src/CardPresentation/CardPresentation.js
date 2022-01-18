import imgJere from '../images/image-jeremy.png';
import './CardPresentation.css'

export default function CardPresentation(props) {
    return (
        <div className='cadre mx-2 px-0 text-white'>
            <div className='presentation my-auto d-flex flex-column align-items-start ps-3 w-100'>
                <div className="divImgJeremy">
                    <img className='imgJere' src={imgJere} alt="" />
                </div>
                <p className="txtSousImg pb-0 mb-0 mt-4">Report for</p>
                <p className="h1Jeremy pt-0 mt-0 mb-5">Jeremy <br />Robson</p>
            </div>
            <div className='sousPresentation ps-3 my-2 d-flex flex-column'>
            <p onClick={() => props.verifActive(1)} className={'my-1 text-decoration-none btnA' + props.active == 1 ? "active" : ""} >Daily</p>
            <p onClick={() => props.verifActive(2)} className={'my-1 text-decoration-none btnA' + props.active == 2 ? "active" : ""}>Weekly</p>
            <p onClick={() => props.verifActive(3)} className={'my-1 text-decoration-none btnA' + props.active == 3 ? "active" : ""}>Monthly</p>

            </div>
        </div>
    )
}
