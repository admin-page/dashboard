import React, { Fragment } from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import { FormEditUser, SubMenu } from "../../components";

export default function EditUser() {
    return (
        <Fragment>
            <SubMenu title="Edit User" />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper style={{ padding: 20 }}>
                            <FormEditUser />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}
