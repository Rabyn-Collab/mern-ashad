
export default function ProjectImage({ image, label }) {
  return (
    <div className="relative">
      <img src={image} alt="" />
      <h1 className="absolute top-0 text-white text-lg bg-black p-2">{label}</h1>
    </div>
  )
}
