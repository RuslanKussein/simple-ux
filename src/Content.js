import React from "react";
import CoffeeCard from "./CoffeeCard";
import {Grid} from "@material-ui/core";
import coffeeMachinesData from "./coffeeMachinesData";

const Content = () => {
    return (
        <Grid container spacing={4}>
            {
                coffeeMachinesData.map((obj, index) => (
                    <Grid item xs={12} sm={4}>
                        <CoffeeCard
                            key={index}
                            title={obj.title}
                            subtitle={obj.price}
                            description={obj.description}
                            avatarSrc={obj.avatarUrl}
                            imgSrc={obj.imageUrl}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
};

export default Content;