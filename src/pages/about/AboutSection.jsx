import { memberData } from "../../data/houseData.js";
import Member from "./Member.jsx";

export default function AboutSection() {
  return (
    <div className="px-7 my-15 ">
      <div>
        <h1>About</h1>
        <hr className="my-4 text-gray-400" />
      </div>


      <div className="space-y-10">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas laboriosam magnam a, deleniti quidem, amet aspernatur provident sapiente, commodi vero? Deserunt maxime sapiente perferendis iure ut est quod officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa natus necessitatibus reprehenderit doloremque accusamus facere! A accusantium delectus impedit ipsum debitis molestias, magnam alias, sit recusandae fugiat laudantium sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facilis numquam perspiciatis, vel cum, neque quae fugit aspernatur doloribus delectus quam </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
          {memberData.map((member) => {
            return <Member key={member.id} member={member} />
          })}
        </div>

      </div>




    </div>
  )
}
