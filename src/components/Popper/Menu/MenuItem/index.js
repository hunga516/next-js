import classNames from "classnames";
import Button from "../../../Button";

const DefaultFn = {}

function MenuItem({ data, onClick = DefaultFn }) {

    const classes = classNames({
        'border-t-[1px] border-[#e3e3e4]': data.separate,
    })

    return (
        <div>
            <Button onClick={onClick} className={classes} size="large" type="menu">
                {data.icon && <data.icon className="text-[20px] mr-2" />}
                <div className="">{data.title}</div>
            </Button>
        </div >
    );
}

export default MenuItem;