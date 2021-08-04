import { useParams } from "react-router-dom";

export default function Apply() {
  const jobTitle = useParams();
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <p>
          <span>
            <h1>Successfully Applied to the job</h1>
          </span>{" "}
          "{jobTitle.jobTitle}"
        </p>
      ) : (
        "redirect"
      )}
    </div>
  );
}
