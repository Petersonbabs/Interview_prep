import React, { useState } from 'react'
import { FormControl, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Controller, FieldValues, Control, Path } from "react-hook-form"
import { Input } from '../ui/input'
import { Eye, EyeClosed } from 'lucide-react'

interface FormFieldProps<T extends FieldValues> {
    name: Path<T>,
    control: Control<T>,
    label: string,
    placeholder?: string,
    type?: "text" | "email" | "password",
    errorMessage: string
}

const FormField = <T extends FieldValues>(props: FormFieldProps<T>) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    return (
        <Controller
            name={props.name}
            control={props.control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className='label' htmlFor={props.label}>{props.label}</FormLabel>
                    <FormControl>
                        {
                            props.type === "password" ? (
                                <div className='border flex gap-2 items-center !bg-dark-200 !rounded-full !min-h-12 !px-5 '>
                                    <Input className="flex-1  border-none placeholder:!text-light-100 focus-visible:ring-0 !bg-transparent" id={props.label} placeholder={props.placeholder} type={!showPassword ? props.type : "text"} {...field} />
                                    <span onClick={()=>setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? (
                                                <Eye />
                                            ) : (
                                                <EyeClosed />
                                            )
                                        }
                                    </span>
                                </div>
                            ) : (
                                <Input className="input" id={props.label} placeholder={props.placeholder} type={props.type || "text"} {...field} />
                            )
                        }
                    </FormControl>
                    {props.errorMessage && <p className='error'>{props.errorMessage}.</p>}
                </FormItem>
            )} />)
}


export default FormField