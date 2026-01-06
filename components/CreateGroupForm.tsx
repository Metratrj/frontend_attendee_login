"use client";

import * as z from "zod";
import {Controller, useForm} from "react-hook-form"
import {groupsCreateInputObjectZodSchema} from "@/generated/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {createGroup} from "@/lib/actions";
import {FormValues, formSchema} from "@/lib/schema";


export default function CreateGroupForm() {

    console.log(formSchema);
    console.log(typeof formSchema());
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            color: "#FFFFFF",
            studentCount: 0
        },
        mode: "onChange"
    })

    async function onSubmit(data: FormValues) {
        console.log(data);
        await createGroup(data);
    }

    return (
        <>
            <form onSubmit={form.handleSubmit(onSubmit)} id="create-group-form">
                <FieldGroup>
                    <Controller
                        name="name"
                        control={form.control}
                        render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Group Name</FieldLabel>
                            <Input {...field}
                                   id="form-cg-name"
                                   aria-invalid={fieldState.invalid}
                                   placeholder="IT0125"
                                   type="text"
                                   autoComplete="off"/>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]}/>
                            )}
                        </Field>
                    )}/>
                    <Controller
                        name="color"
                        control={form.control}
                        render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Group Color</FieldLabel>
                            <Input {...field}
                                   id="form-cg-color"
                                   aria-invalid={fieldState.invalid}
                                   type="color"/>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]}/>
                            )}
                        </Field>
                    )}/>

                    <Controller
                        name="studentCount"
                        control={form.control}
                        render={({field, fieldState}) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Create Students</FieldLabel>
                                <Input {...field}
                                       id="form-cg-count"
                                       aria-invalid={fieldState.invalid}
                                       type="number"/>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]}/>
                                )}
                            </Field>
                        )}/>
                </FieldGroup>
            </form>
        </>
    );
}