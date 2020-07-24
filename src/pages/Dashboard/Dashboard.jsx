import React, { Fragment, useEffect, useState } from "react";
import { SubMenu } from "../../components";
import Paper from "@material-ui/core/Paper";
import {
    Chart,
    PieSeries,
    Tooltip,
    Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { EventTracker, HoverState, Stack } from "@devexpress/dx-react-chart";
import { Animation } from "@devexpress/dx-react-chart";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "../../redux/actions";

export default function Dashboard() {
    const admins = useSelector((state) => state.admins);
    const dispatch = useDispatch();
    const [hover, setHover] = useState(undefined);
    const [targetItem, setTargetItem] = useState(undefined);
    const stacks = [{ series: admins.map((item) => item.status) }];

    useEffect(() => {
        dispatch(getDashboard());
    }, [dispatch]);

    const changeHover = (hover) => setHover(hover);
    const changeTargetItem = (targetItem) => setTargetItem(targetItem);

    return (
        <Fragment>
            <SubMenu title="Dashboard" />
            <Paper>
                <Chart data={admins}>
                    <PieSeries valueField="count" argumentField="status" />
                    <EventTracker />
                    <HoverState hover={hover} onHoverChange={changeHover} />
                    <Stack stacks={stacks} />
                    <Tooltip
                        targetItem={targetItem}
                        onTargetItemChange={changeTargetItem}
                    />
                    <Animation />
                    <Legend />
                </Chart>
            </Paper>
        </Fragment>
    );
}
