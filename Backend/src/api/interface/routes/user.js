import { Signin,Signup,myBookings } from "../controller/user_controller.js";
import { searchHotel,bookHotel } from "../controller/hotel_controller.js";
import authMiddleware from "../../lib/authMiddleware.js"
export default function useRouter(router){
    router.post("/user/signup",Signup)
    router.post("/user/signin",Signin)
    router.post("/user/search",searchHotel)
    router.post("/user/book",authMiddleware, bookHotel)
    router.get("/user/mybookings",authMiddleware,myBookings)
}