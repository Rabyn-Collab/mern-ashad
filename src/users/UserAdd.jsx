import { Form, Input, Button, Checkbox, RadioGroup, Radio, Select, SelectItem, Textarea } from "@heroui/react";
import { Formik } from "formik";
import * as Yup from 'yup';

const habits = ['dance', 'sing', 'code', 'swim']
const countries = [
  { key: "nepal", label: "Nepal" },
  { key: "india", label: "India" },
  { key: "china", label: "China" },

];


const valSchema = Yup.object({
  username: Yup.string().min(5).max(20).required(),
  email: '',
  habits: [],
  gender: '',
  country: '',
  description: ''
})

export default function UserAdd() {
  return (
    <div className="p-5">

      <Formik
        initialValues={{
          username: '',
          email: '',
          habits: [],
          gender: '',
          country: '',
          description: ''
        }}

        onSubmit={(val) => {
          console.log(val);
        }}
        validationSchema={valSchema}
      >


        {({ handleChange, handleSubmit, values, errors, touched }) => (

          <Form
            onSubmit={handleSubmit}
            className="w-full max-w-xs flex flex-col gap-4">
            <Input
              onChange={handleChange}
              label="Username"
              labelPlacement="outside"
              name="username"
              placeholder="Enter your username"
              type="text"
            />
            {errors.username && touched.username && <p className="text-red-500">{errors.username}</p>}

            <Input
              onChange={handleChange}
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            <div className="space-y-3">
              <h2 className="text-md">Select your habits</h2>
              <div className="flex gap-4">

                {habits.map((habit, index) => {
                  return <Checkbox
                    key={index}
                    onChange={handleChange}
                    value={habit} name="habits">{habit}</Checkbox>
                })}


              </div>
            </div>

            <RadioGroup onChange={handleChange} name="gender" label="Select your Gender">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </RadioGroup>

            <Select
              className="max-w-xs"
              name="country"
              onChange={handleChange}
              label="Country"
              placeholder="Select your Country"
            >
              {countries.map((country) => (
                <SelectItem
                  key={country.key}>{country.label}</SelectItem>
              ))}
            </Select>

            <Textarea
              onChange={handleChange}
              name="description"
              className="max-w-xs" label="Description" placeholder="Enter your description" />

            <Button color="primary" type="submit">
              Submit
            </Button>



          </Form>

        )}



      </Formik>



    </div>
  )
}
