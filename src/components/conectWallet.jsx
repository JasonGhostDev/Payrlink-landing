import React from "react";
import { Button, Modal } from "react-bootstrap";
import ExcMark from "../assets/exclamation.svg";
import Metamask from "../assets/metamask.svg";
import WConnect from "../assets/wallet-Connect.svg";

function ConectWallet(props) {

  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custome_normal_modal"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center text-white font-weight-bold"
        >
          Connect Wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
        <div className="d-flex">
          <img src={ExcMark}  alt="" className="mr-3" />
          <p className="mb-0 ">
            You are about to input highly sensitive information, please DO NOT
            expose to strangers.
          </p>
        </div>
        <div className="px-4">
          <Button
            variant="light"
            className="mx-md-3 shadow d-flex align-items-center w-fill-available my-3"
            onClick={() => props.onChangeWallet("metamask")}
          >
            <img src={Metamask}  alt="" />
            <h3 className="mb-0 ml-3"> Metamask</h3>
          </Button>
          <Button
            variant="light"
            className="mx-md-3 shadow d-flex align-items-center w-fill-available mb-5"
            onClick={() => props.onChangeWallet("walletconnect")}
          >
            <img src={WConnect}  alt="" />
            <h3 className="mb-0 ml-3"> WalletConnect</h3>
          </Button>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
  );
}

export default ConectWallet;
