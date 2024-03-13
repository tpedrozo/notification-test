const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    console.log(perm);
    if (perm === "granted") {
      new Notification("Example Notification", {
        body: "This is the permission",
      });

      notification.addEventListener("error", (e) => {
        alert("error", e.message);
      });
    }
  });
});
