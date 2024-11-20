import '../assets/styles/LegendCube.css'

export default function LegendCube({ color, text }) {
  return (
    <>
      <div className={color}></div>
      <h5 className="m-0 p-3">{text}</h5>
    </>
  )
}