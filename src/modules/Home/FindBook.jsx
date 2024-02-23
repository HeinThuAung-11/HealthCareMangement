import {useForm} from "react-hook-form";
import {FormControl, InputAdornment, OutlinedInput} from "@mui/material";
import {CiLocationOn, CiSearch} from "react-icons/ci";

export const SearchBar = () => {
    const {register, handleSubmit, formState: {errors},} = useForm({
        mode: "onTouched",
    })
    // Submit your data into Redux store
    const onSubmit = (data) => {
        console.log(data)
    }

    return (<div className={"my-3"}>
            <h1 className={"text-center text-4xl text-blue-500 my-5"}>Find and Book</h1>
            <div className={"flex justify-center items-center"}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <FormControl sx={{width: '25ch'}} variant="outlined">
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
                    <FormControl sx={{width: '35ch'}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            {...register("location", {})}
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
                </form>
            </div>
        </div>
    )
}