import ProjectImage from "./ProjectImage.jsx";

export default function Projects() {
  return (
    <div className="px-7 my-15">

      <h1>Projects</h1>
      <hr className="my-4 text-gray-400" />


      <div className="grid grid-cols-4 gap-3">
        <ProjectImage />
        <ProjectImage />
        <ProjectImage />
        <ProjectImage />
        <ProjectImage />
        <ProjectImage />
        <ProjectImage />
        <ProjectImage />

      </div>

    </div>
  )
}
