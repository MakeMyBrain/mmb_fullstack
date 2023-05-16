const loginFields = [
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"
    },
]


const signupFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Username"
    },
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"
    },
    {
        labelText: "Date of Birth",
        labelFor: "DOB",
        id: "dob",
        name: "date",
        type: "date",
        autoComplete: "Date of Birth",
        isRequired: true,
        placeholder: "YYYY-MM-DD"
    },
    {
        labelText: "Gender",
        labelFor: "Gender",
        id: "gender",
        name: "gender",
        type: "gender",
        autoComplete: "gender",
        isRequired: true,
        placeholder: "Gender"
    }
]


export { loginFields, signupFields }