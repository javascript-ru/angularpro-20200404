web-push send-notification \
--endpoint="https://fcm.googleapis.com/fcm/send/f4vyMvzFgMA:APA91bEIO9mf-S_wuexRNVzKTw-gVJkSZUfTN7PqKgXJzWUCAnGrCIPofJaqeCsFWD9dsf29-foe4D9CGjFJ6HvANDK86dWz5R5zJgz3PopjUaU6WhUVH8NiU3XWPLFqw6jTdoRLVp6t" \
--key="BL6vyNYi5i6PZLAVagUTHUaWInbycyl6WvATGP4EXcxE9ZUvQAp30reOb3_yyvG2uuR7vaOspC2-rGZ_-zKD6fo" \
--auth="Ksl1TdiQ0cIvJKB3wS17pQ" \
--payload='{"test":"123","notification":{"title":"TEST","body":"OH MY TEST"}}' \
--vapid-subject="http://localhost:8080" \
--vapid-pubkey="BF1fCE96xfWo4wLlRdkXR9Bg4aimcxY97sE_SEPZUkmld3aztyua2JpXBb8cV7nJBtYtb5Gwseqrf9cn05D5AtY" \
--vapid-pvtkey="J2EBTpjbVzvD9tUEEkwR-MfdI73WjjjX6qrb_RqjpUs"
