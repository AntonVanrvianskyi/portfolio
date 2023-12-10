import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useState} from "react";
import {useMyContext} from "../../context";

export default function BasicSelect() {
    const [language, setLanguage] = useState("en")
    const { setMyValue } = useMyContext()
    setMyValue(language)
    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);


    };

    return (
            <FormControl variant="standard" sx={{minWidth: "50px"}}>
                <Select

                    MenuProps={{
                        sx:{
                            "& .MuiSelect-outlined":{
                                border: "none"
                            }
                        }
                    }}
                    sx={{

                        "& .MuiSelect-outlined":{
                            border: "none"
                        }
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="en">EN</MenuItem>
                    <MenuItem value="ua">UA</MenuItem>
                </Select
                 >
            </FormControl>
    );
}