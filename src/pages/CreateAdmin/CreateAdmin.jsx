import React, { Fragment } from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import { FormAddAdmin, SubMenu } from "../../components";

export default function CreateAdmin() {
    return (
        <Fragment>
            <SubMenu title="Create Admin" />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper style={{ padding: 20 }}>
                            <FormAddAdmin />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}
