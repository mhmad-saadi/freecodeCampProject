import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const { method } = req;

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);
  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: "Events data not found",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;
    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res
            .status(401)
            .json({ message: "This email has already been registered" });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );
    //   res.status(200)
    //   .json({ message: `You has been registered successfully ${email}` });
  }
}

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}
function extractData(filepath) {
  const jsonData = fs.readFileSync(filepath);
  const data = JSON.parse(jsonData);
  return data;
}
