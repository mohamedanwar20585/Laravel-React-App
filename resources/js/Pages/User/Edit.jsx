import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ user}) {
    const { data, setData, post, errors, reset } = useForm({
        name:user.name|| '',
        email:user.email|| '',
        password:'',
        password_confirmation:'',
        _method:'PUT'

    })

    const onSubmit = (e) => {
        e.preventDefault();

        post(route('user.update',user.id))

    }

    return (
        <AuthenticatedLayout
            header={
                <div className='flex justify-between items-center' >
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit Users "{user.name}"</h2>

                </div>
            }
        >
            <Head title="Create User" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        <form
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                <div className="mt-4">
                                    <InputLabel htmlFor="user_name" value="User Name" />
                                    <TextInput id="user_name"
                                        type="text" name="name"
                                        value={data.name}
                                        isFocused={true}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('name', e.target.value)} />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="user_email" value="Email" />
                                    <TextInput id="user_email"
                                        type="text" name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('email', e.target.value)} />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="user_password" value="Password" />
                                    <TextInput id="user_password"
                                        type="password" name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('password', e.target.value)} />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="user_password_confirmation" value="Password Confirm" />
                                    <TextInput id="user_password_confirmation"
                                        type="password" name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('password_confirmation', e.target.value)} />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                                <div className="mt-4 flex items-center justify-end gap-3 ">
                                    <Link href={route('user.index')}
                                     className=" bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-300 text-sm ">
                                    Cancel
                                    </Link>
                                    <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 text-sm ">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}


