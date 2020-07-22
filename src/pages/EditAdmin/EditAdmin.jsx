import React, { Fragment } from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import { FormEditAdmin, SubMenu } from "../../components";

export default function CreateAdmin() {
    return (
        <Fragment>
            <SubMenu title="Edit Admin" />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper style={{ padding: 20 }}>
                            <FormEditAdmin />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}
