import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { RpcError } from "grpc-web";
import { APIStatus } from "./enum";

export interface PDialogProps {
    open: boolean;
    err: any;
    status: APIStatus;
    onClose: () => void;
}

export const PDialog = (props: PDialogProps) => {
    const { onClose, err, open, status } = props;

    const handleClose = () => {
        onClose();
    };

    return <>
        <Dialog onClose={handleClose} open={open} fullWidth={true}>
            <DialogTitle>Result</DialogTitle>
            <DialogContent>
                {
                    status === APIStatus.FAILED ?
                        <>
                            {
                                err instanceof RpcError ?
                                    <DialogContentText >{err.message}</DialogContentText >
                                    : <DialogContentText >unknown error {err}</DialogContentText >
                            }
                        </>
                        : <DialogContentText >{status}</DialogContentText >
                }
                <br />
                {
                    status !== APIStatus.PROCESSING ?
                        <Button variant="outlined" onClick={() => { onClose() }}>Close</Button> : null
                }
            </DialogContent>
        </Dialog>
    </>
}