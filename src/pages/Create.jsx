import React, { useState } from 'react'
import Gallery from '../assets/icons/gallery.png'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../components/Button'
import FileBase from 'react-file-base64'

const SignupSchema = yup.object().shape({
  content: yup.string().required('Chưa nhập nội dung!'),
  title: yup.string().required('Tiêu đề là bắt buộc!'),
  slug: yup.string().required('Danh mục là bắt buộc!'),
  main: yup.string().required('Chưa nhập nội dung!')
})

const Create = () => {
  const [dataForm, setDataForm] = useState()
  const [selectImages, setSelectImages] = useState()
  console.log(dataForm)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  })
  const onSubmit = (data) => {
    if (selectImages) {
      const newData = { ...data, picture: [...selectImages] }
      setDataForm(newData)
    } else {
      setDataForm(data)
    }
  }
  return (
    <div className='max-w-[1000px] mx-auto pt-10'>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <div className='flex justify-between'>
          <div className='left w-[400px]'>
            <div className='flex flex-col mb-8'>
              <label className='font-semibold text-[20px] mb-[15px] text-[#84878B]'>Title</label>
              <div className='border rounded-lg pl-3 mb-3 h-[48px] flex items-center'>
                <input
                  {...register('title')}
                  placeholder='Title '
                  className='placeholder:text-[16px] w-full bg-white text-[16px]'
                />
              </div>
              {errors.title && <p className='text-[#fa3b3b]'>{errors.title.message}</p>}
            </div>
            <div className='flex flex-col mb-8'>
              <label className='font-semibold text-[20px] mb-[15px] text-[#84878B]'>Short description</label>
              <div className='border rounded-lg p-3 mb-3 h-[200px] flex items-center overflow-hidden'>
                <textarea
                  id='w3review'
                  name='w3review'
                  // rows='4'
                  cols='50'
                  {...register('content')}
                  placeholder='Short description'
                  className='placeholder:text-[16px] w-full bg-white text-[16px] h-full resize-none'
                />
              </div>
              {errors.content && <p className='text-[#fa3b3b]'>{errors.content.message}</p>}
            </div>
          </div>
          <div className='right w-[400px]'>
            <div className='flex flex-col mb-8'>
              <label className='font-semibold text-[20px] mb-[15px] text-[#84878B]'>Slug</label>
              <div className='border rounded-lg pl-3 mb-3 h-[48px] flex items-center'>
                <input
                  {...register('slug')}
                  placeholder='Slug '
                  className='placeholder:text-[16px] w-full bg-white text-[16px]'
                />
              </div>
              {errors.slug && <p className='text-[#fa3b3b]'>{errors.slug.message}</p>}
            </div>

            <div>
              <label className='font-semibold text-[20px]  text-[#84878B]'>Images</label>
              <section className='mt-[15px]'>
                <label className='m-0 flex flex-col base-file justify-center items-center border rounded-lg w-[400px] h-[200px] text-lg '>
                  <img src={Gallery} alt='' className='w-[60.41px] h-[62.43px]' />
                  <FileBase
                    type='file'
                    name='picture'
                    onDone={(base64) => {
                      const listBase = base64.map((item, index) => {
                        return item.base64
                      })
                      setSelectImages(listBase)
                    }}
                    multiple={true}
                    accept='image/png, image/jpg, image/webp'
                  />
                </label>
              </section>
            </div>
          </div>
        </div>
        <div className='flex flex-col mb-8'>
          <label className='font-semibold text-[20px] mb-[15px] text-[#84878B]'>Content</label>
          <div className='border rounded-lg p-3 mb-3 h-[200px] flex items-center overflow-hidden'>
            <textarea
              id='w3review'
              name='w3review'
              // rows='4'
              cols='50'
              {...register('main')}
              placeholder='Enter your content...'
              className='placeholder:text-[16px] w-full bg-white text-[16px] h-full resize-none'
            />
          </div>
          {errors.main && <p className='text-[#fa3b3b]'>{errors.main.message}</p>}
        </div>
        <div className='w-full flex justify-center'>
          <Button linearGradient={true} login={true}>
            Add new post
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Create
