import ReactTooltip from 'react-tooltip';

import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button data-tip="Copied!" className="room-code">
      <div>
        <img src={copyImg} alt="Copy room code" />
        <ReactTooltip 
          className="tooltip"
          place="bottom"
          event="click"
          eventOff="click"
          delayHide={2000}
          afterShow={copyRoomCodeToClipboard}
        />
      </div>
      <span>#{props.code}</span>
    </button>
  );
}