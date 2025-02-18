import zod from "zod"

export const signupValidator = zod.object({
    name: zod.string(),
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
})

export const signinValidator = zod.object({
   
    email: zod.string().email(),
    password: zod.string().min(6)
})
export const adminSigninValidator = zod.object({
    username: zod.string(),
    password: zod.string().min(6)
})

export const ownerSignupValidator= zod.object({
    name: zod.string(),
    phone: zod.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    email: zod.string().email(),
    idProof: zod.string(),
    password: zod.string().min(6)
})

export const ownerSigninValidator = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})

export const hotelValidator = zod.object({
    name:zod.string(),
    area: zod.string(),
    city: zod.string(),
    state:zod.string(),
    price: zod.number(),
    unmarriedFriendly:zod.boolean(),
    createdBy: zod.string()
})