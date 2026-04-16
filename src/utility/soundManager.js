import new_bid_sound from '../../public/assets/sounds/new_bid.wav'
import receive_message_sound from '../../public/assets/sounds/receive.wav'
import send_message_sound from '../../public/assets/sounds/send.wav'
import bid_closed_sound from '../../public/assets/sounds/bid_closed.wav'
import notification_sound from '../../public/assets/sounds/notification.wav'


const sounds={
    new_bid_sound: new Audio(new_bid_sound),
    receive_message_sound: new Audio(receive_message_sound),
    send_message_sound: new Audio(send_message_sound),
    bid_closed_sound: new Audio(bid_closed_sound),
    notification_sound: new Audio(notification_sound)
}

export const playSound = (type) => {
  const sound = sounds[type];
  if (sound) {
    sound.currentTime = 0; // restart sound
    sound.play();
  }
};