import { Layout } from "~/components/layout"
import { FormField } from "~/components/form-field"
import { useState } from 'react'

export default function Login() {
  const [action, setAction] = useState('login')

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData(form => ({
      ...form,
      [field]: event.target.value
    }))

  }

  return (
    <Layout>
      <div className="h-full flex justify-center items-center flex-col gap-y-4">
        <button
          onClick={() => setAction(action == 'login' ? 'register' : 'login')}
          className="absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
        >{action === 'login' ? 'Sign Up' : 'Sign In'}</button>
        <h2 className="text-5xl font-extrabold text-yellow-300">Welcome to Expense Tracker</h2>
        <p className="font-semibold text-slate-300"> {action === 'login' ? 'login now' : 'Sign up to get started!'} !</p>

        <form className="rounded-2xl bg-gray-200 p-6 w-96">
          {/* <label htmlFor="email" className="text-blue-600 font-semibold">Email</label>
          <input type="text" id="email" name="email" className="w-full p-2 rounded-xl my-2" />

          <label htmlFor="password" className="text-blue-600 font-semibold">Password</label>
          <input type="password" id="password" name="password" className="w-full p-2 rounded-xl my-2" /> */}
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={e => handleInputChange(e, "email")}
          />
          <FormField
            htmlFor="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={e => handleInputChange(e, "password")}
          />


          {
            action !== 'login' ? <>
              <FormField
                htmlFor="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={e => handleInputChange(e, "firstName")}
              />
              <FormField
                htmlFor="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={e => handleInputChange(e, "lastName")}
              />

            </> : null
          }


          <div className="w-full text-center">
            {/* <input
              type="submit"
              className="rounded-xl mt-2 bg-yellow-300 px-2 py-3 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
              value={action === 'login' ? 'Sign In' : 'Sign Up'}
            /> */}

            <button type="submit" name="_action" value={action} className="rounded-xl mt-2 bg-yellow-300 px-2 py-3 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1">
              {
                action === 'login' ? "Sign In" : "Sign Up"
              }
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
