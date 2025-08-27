
export default function Member({ member }) {
  return (
    <div >
      <div>
        <img className="w-full" src={member.image} alt="" />
      </div>
      <div className="space-y-3 flex flex-col">
        <h1>{member.name}</h1>
        <p className="text-gray-500">CEO & Founder</p>
        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>

        <button className="text-center py-2 bg-gray-100">Contact</button>
      </div>

    </div>
  )
}
