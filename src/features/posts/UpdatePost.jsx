import { Button, Form, Input, Textarea } from "@heroui/react";
import { Formik } from "formik";


import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { valSchema } from "./AddPost";
import { useGetPostQuery, useUpdatePostMutation } from "./postApi";



export default function UpdatePost() {
  const { id } = useParams();
  const { isLoading, error, data } = useGetPostQuery(id);
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const nav = useNavigate();
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1 className="text-red-500">{error.data}</h1>


  return (
    <div className="p-5">

      <Formik
        initialValues={{
          title: data.title,
          detail: data.detail,
          author: data.author,
          image: data.image
        }}

        onSubmit={async (val) => {
          try {
            await updatePost({
              data: val,
              id
            }).unwrap();
            toast.success('Post update successfully');
            nav(-1);
          } catch (err) {
            toast.error(err.data)
          }
        }}

        validationSchema={valSchema}


      >

        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            onSubmit={handleSubmit}
            className="max-w-[400px]  space-y-5"
          >
            <div className="w-full">
              <Input
                className="w-full"
                onChange={handleChange}
                value={values.title}
                label="Title"
                labelPlacement="outside"
                name="title"
                placeholder="Enter Title"
                type="text"
              />
              {touched.title && errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>

            <div className="w-full">
              <Textarea
                className="w-full"
                onChange={handleChange}
                value={values.detail}
                label="Detail"
                labelPlacement="outside"
                name="detail"
                placeholder="Enter Detail"
                type="text"
              />
              {touched.detail && errors.detail && <p className="text-red-500">{errors.detail}</p>}
            </div>

            <div className="w-full">
              <Input
                className="w-full"
                onChange={handleChange}
                value={values.author}
                label="Author"
                labelPlacement="outside"
                name="author"
                placeholder="Enter Author"

                type="text"
              />
              {touched.author && errors.author && <p className="text-red-500">{errors.author}</p>}
            </div>

            <div className="w-full">
              <Input
                className="w-full"
                onChange={handleChange}
                value={values.image}
                label="Image"
                labelPlacement="outside"
                name="image"
                placeholder="Enter Image"
                type="text"

              />
              {touched.image && errors.image && <p className="text-red-500">{errors.image}</p>}
            </div>



            <Button
              isLoading={isUpdating}
              type="submit" color="primary">Submit</Button>

          </Form>
        )}

      </Formik>

    </div>
  )
}
