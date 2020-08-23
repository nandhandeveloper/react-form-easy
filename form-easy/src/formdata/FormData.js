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
                error: 'Atleast 6 characters are required'
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
                error: 'Atleast 6 characters are required'
            }
        },
        errors: [],
    },
    strengthPassword :{
        name: 'strengthPassword',
        value: '',
        type: 'strengthPassword',
        label: 'Strength Password*',
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
                error: 'Atleast 6 characters are required'
            }
        },
        strength: {
            number: {
                regEx: "[0-9]",
                isValid: false
            },
            lowercaseChar: {
                regEx: "[a-z]",
                isValid: false
            },
            upercaseChar: {
                regEx: "[A-Z]",
                isValid: false
                
            },
            specialCharc: {
                regEx: "[\\W|_]",
                isValid: false                
            }
        },
        errors: [],
    },
    showAndStrengthpassword: {
        name: 'showAndStrengthpassword',
        value: '',
        type: 'showAndStrengthpassword',
        label: 'Show And Strength Password*',
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
                error: 'Atleast 6 characters are required'
            }
        },
        strength: {
            number: {
                regEx: "[0-9]",
                isValid: false
            },
            lowercaseChar: {
                regEx: "[a-z]",
                isValid: false
            },
            upercaseChar: {
                regEx: "[A-Z]",
                isValid: false
                
            },
            specialCharc: {
                regEx: "[\\W|_]",
                isValid: false                
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
    ratings: {
        name: 'ratings',
        value: '',
        type: 'customradio',
        radios: [
            {
                id: 1,
                value: '4.5',
                label: {
                    type: 'rating',
                    name: '4.5 & above',
                    value: 4.5,
                }
            },
            {
                id: 2,
                value: '4',
                label: {
                    type: 'rating',
                    name: '4 & above',
                    value: 4,
                }
            },
            {
                id: 3,
                value: '3.5',
                label: {
                    type: 'rating',
                    name: '3.5 & above',
                    value: 3.5,
                }
            },
            {
                id: 4,
                value: '3',
                label: {
                    type: 'rating',
                    name: '3 & above',
                    value: 3,
                }
            }
        ],
        label: 'Ratings*',
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
        label: 'Not required checkBox.',
        isValid: true,
        isTouched: false,
        validations: {
        },
        errors: [],
    },
    price: {
        name: 'price',
        type: 'groupcheckbox',
        label: 'Price',
        isValid: true,
        isTouched: false,
        checkBoxControls: {
            paid: {
                id: 1,
                value: false,
                name: 'price>paid',
                label: 'Paid'
            },
            free: {
                id: 2,
                value: false,
                name: 'price>free',
                label: 'Free'
            }
        },
        validations: {

        },
        errors: [],
    }
}

export default FormData;