const FormData = {
    firstname: {
        name: 'firstname',
        value: '',
        type: 'text',
        label: 'First Name*',
        multiline: false,
        isValid: false,
        isTouched: false,
        validations: {
            required: {
                value: true,
                error: 'This is a required field',
            }
        },
        errors: [],
    },
    lastname: {
        name: 'lastname',
        value: '',
        type: 'text',
        label: 'Last Name (not required field)',
        multiline: false,
        isValid: true,
        isTouched: false,
        validations: {

        },
        errors: [],
    },
    introduction: {
        name: 'introduction',
        value: '',
        type: 'text',
        label: 'Introduction',
        multiline: true,
        rows: 8,
        isValid: true,
        isTouched: false,
        validations: {
            required: {
                value: true,
                error: 'This is a required field',
            }
        },
        errors: [],
    },
    email: {
        name: 'email',
        value: '',
        type: 'email',
        label: 'Email*',
        isValid: false,
        isTouched: false,
        multiline: false,
        validations: {
            required: {
                value: true,
                error: 'This is a required field',
            },
            email: {
                value: '',
                error: 'A valid email is required'
            }
        },
        errors: [],
    },
    password: {
        name: 'password',
        value: '',
        type: 'password',
        label: 'Password*',
        isValid: false,
        multiline: false,
        isTouched: false,
        validations: {
            required: {
                value: true,
                error: 'This is a required field'
            },
            minlength: {
                value: 6,
                error: 'A valid password is required'
            }
        },
        errors: [],
    },
    showpassword: {
        name: 'showpassword',
        value: '',
        type: 'showpassword',
        label: 'Show Password*',
        isValid: false,
        multiline: false,
        isTouched: false,
        showPassword: false,
        validations: {
            required: {
                value: true,
                error: 'This is a required field'
            },
            minlength: {
                value: 6,
                error: 'A valid password is required'
            }
        },
        errors: [],
    },
    status: {
        name: 'status',
        value: '',
        type: 'select',
        options: [
            {
                id: 1,
                value: 'ACTIVE',
                label: 'ACTIVE'
            },
            {
                id: 2,
                value: 'INACTIVE',
                label: 'INACTIVE'
            }
        ],
        label: 'Status*',
        isValid: false,
        isTouched: false,
        validations: {
            required: {
                value: true,
                error: 'This is a required field',
            }
        },
        errors: [],
    },
    gender: {
        name: 'gender',
        value: '',
        type: 'radio',
        radios: [
            {
                id: 1,
                value: 'MALE',
                label: 'MALE'
            },
            {
                id: 2,
                value: 'FEMALE',
                label: 'FEMALE'
            },
            {
                id: 3,
                value: 'OTHERS',
                label: 'OTHERS'
            }
        ],
        label: 'Gender*',
        isValid: false,
        isTouched: false,
        validations: {
            required: {
                value: true,
                error: 'This is a required field',
            }
        },
        errors: [],
    },
    gender2: {
        name: 'gender2',
        value: '',
        type: 'radio',
        radios: [
            {
                id: 1,
                value: 'MALE',
                label: 'MALE'
            },
            {
                id: 2,
                value: 'FEMALE',
                label: 'FEMALE'
            },
            {
                id: 3,
                value: 'OTHERS',
                label: 'OTHERS'
            }
        ],
        label: 'Gender2',
        row: true,
        isValid: true,
        isTouched: false,
        validations: {
        },
        errors: [],
    },
    agree: {
        name: 'agree',
        value: false,
        type: 'checkbox',
        label: 'I agree for email notifications for new courses and offers.*',
        isValid: false,
        isTouched: false,
        validations: {
            required: {
                value: true,
                error: 'This is a required field'
            },
        },
        errors: [],
    },
    notrequiredchecbox: {
        name: 'notrequiredchecbox',
        value: false,
        type: 'checkbox',
        label: 'Not requred checkBox.',
        isValid: true,
        isTouched: false,
        validations: {
        },
        errors: [],
    }
}

export default FormData;