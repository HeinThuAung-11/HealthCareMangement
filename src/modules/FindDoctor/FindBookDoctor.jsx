import {useForm} from "react-hook-form";
import {FormControl, InputAdornment, OutlinedInput} from "@mui/material";
import {CiLocationOn, CiSearch} from "react-icons/ci";
import {useDispatch} from "react-redux";
import {SetDepartment} from "../../features/labTestSlice.js";
import {useNavigate} from "react-router-dom";

export const SearchDoc = () => {
    const {register, handleSubmit, formState: {errors},} = useForm({
        mode: "onTouched",
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Submit your data into Redux store
    const onSubmit = (data) => {
        console.log(data)
        dispatch(SetDepartment(data.department))
        navigate("/find-doctors")
    }

    return (
        <div className={"my-3  mt-32"}>
            <h1 className={"text-center text-5xl text-blue-900 my-5 font-bold"}>Your home for health</h1>
            <div className="flex justify-center  mb-28">
                <div className="bg-blue-500 w-4 h-4 rounded-full mx-1"></div>
                <div className="bg-blue-500 w-4 h-4 rounded-full mx-1"></div>
                <div className="bg-blue-500 w-4 h-4 rounded-full mx-1"></div>
            </div>
            <h1 className={"text-center text-3xl text-blue-900 my-5"}>Find and Book</h1>
            <div className={"flex justify-center items-center"} style={{marginBottom: "5%"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl sx={{width: '25ch', backgroundColor: 'white'}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            {...register("location", {})}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'location',
                            }}
                            placeholder={"Coventry"}
                            startAdornment={
                                <InputAdornment position="start"><CiLocationOn/></InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl sx={{width: '35ch', backgroundColor: 'white'}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            {...register("department", {})}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'location',
                            }}
                            placeholder={"Search doctors,clinics,hospitals"}
                            startAdornment={
                                <InputAdornment position="start"><CiSearch/></InputAdornment>
                            }
                        />
                    </FormControl>
                    <button onClick={handleSubmit} className={"w-[100px] h-[56px] bg-blue-700 text-white"}>Search
                    </button>
                </form>
            </div>
        </div>
    )
}