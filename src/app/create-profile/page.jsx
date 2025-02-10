"use client";
import React, { useRef, useState } from "react";
import "./style.css";
import { FaUser } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import { baseUrl } from "@/utils/api";
import { toast } from "react-toastify";
function CreateProfile() {
  //   const Select = function (e) {
  //     let selected = e.target.value;
  //     if (selected === "2") {
  //       alert("salom");
  //     }
  //   };

  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");
  const [github, setGitHub] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("");

  let [facebook, setFacebook] = useState("");
  let [youtube, setYoutube] = useState("");
  let [linkedin, setLinkedin] = useState("");
  let [instagram, setInstagram] = useState("");
  let [twitter, setTwitter] = useState("");
  let [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let onSubmit = async (e) => {
    e.preventDefault();
    if (
      !company.trim() ||
      !location.trim() ||
      !skills.trim() ||
      !github.trim() ||
      // !website.trim() ||
      !status.trim() ||
      !bio.trim()
      // !facebook.trim() ||
      // !youtube.trim() ||
      // !linkedin.trim() ||
      // !instagram.trim()
    ) {
      toast.error("Jadval to'ldirilmagan");
      return null;
    }

    try {
      let response = await axios.post(
        `${baseUrl}/profile`,
        {
          bio,
          company,
          location,
          skills,
          github,
          website,
          status,
          twitter,
          facebook,
          youtube,
          linkedin,
          instagram,
        },
        {
          headers: {
            "x-auth-token": ` ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Saqlandi");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error");
    }
  };

  const [network, setNetwork] = useState(false);
  const router = useRouter();
  return (
    <div className="create">
      <div className="create_item">
        <h1 className="text-5xl font-bold text-cyan-500">
          Create Your Profile
        </h1>
        <h2 className="flex gap-2 items-center text-2xl font-medium ">
          <FaUser />
          Let's get some information to make your
        </h2>
        <p>* = required field</p>
        <form onSubmit={onSubmit}>
          <div className="grid gap-1">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-gray-500"
              name=""
              id=""
            >
              <option value="">* Select Professional Status</option>
              <option value="Developer"> Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor or Teacher">
                Instructor or Teacher
              </option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <label className="text-zinc-500" htmlFor="">
              Give us an idea of where you are at in your career
            </label>
          </div>
          <div className="grid gap-1">
            <input
              onChange={(e) => setCompany(e.target.value)}
              value={company}
              type="text"
              placeholder="Company"
            />
            <label className="text-zinc-500" htmlFor="">
              Could be your own company or one you work for
            </label>
          </div>

          <div className="grid gap-1">
            <input
              onChange={(e) => setWebsite(e.target.value)}
              value={website}
              type="text"
              placeholder="Website"
            />
            <label className="text-zinc-500" htmlFor="">
              Could be your own or a company website
            </label>
          </div>

          <div className="grid gap-1">
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              type="text"
              placeholder="Location"
            />
            <label className="text-zinc-500" htmlFor="">
              City & state suggested (eg. Boston, MA)
            </label>
          </div>

          <div className="grid gap-1">
            <input
              onChange={(e) => setSkills(e.target.value)}
              value={skills}
              type="text"
              placeholder="* Skills"
            />
            <label className="text-zinc-500" htmlFor="">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </label>
          </div>

          <div className="grid gap-1">
            <input
              onChange={(e) => setGitHub(e.target.value)}
              value={github}
              type="text"
              placeholder="Github Username"
            />
            <label className="text-zinc-500" htmlFor="">
              If you want your latest repos and a Github link, include your
              username
            </label>
          </div>
          <div className="grid gap-1">
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              className="h-15 border border-gray-500"
              type=""
              placeholder="A short bio of yourself"
            ></textarea>
            <label className="text-zinc-500" htmlFor="">
              Tell us a little about yourself
            </label>
          </div>
          <div className="flex gap-3 items-center my-5 ">
            <button
              type="button"
              onClick={() => setNetwork(!network)}
              className=" bg-gray-300  w-52 h-9"
            >
              Add social Network Links
            </button>
            <span> Optional</span>
          </div>

          {network && (
            <div className="network">
              <div className="flex items-center gap-3">
                <FaTwitter className="text-4xl text-blue-900" />
                <input
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  type="text"
                  placeholder="Twitter URL"
                />
              </div>
              <div className="flex items-center gap-3">
                <FaFacebookSquare className="text-4xl text-blue-500  bg-none" />
                <input
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  type="text"
                  placeholder="Facebook URL"
                />
              </div>
              <div className="flex items-center gap-3">
                <FaYoutube className="text-4xl bg-none text-[red]" />
                <input
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                  type="text"
                  placeholder="YouTube URL"
                />
              </div>
              <div className="flex items-center gap-3">
                <ImLinkedin className="text-4xl bg-none text-sky-700" />
                <input
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  type="text"
                  placeholder="Linkedin URL"
                />
              </div>

              <div className="flex items-center gap-3">
                <FaInstagram className="text-4xl bg-none text-sky-400" />
                <input
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  type="text"
                  placeholder="Instagramm URL"
                />
              </div>
            </div>
          )}

          <div className="flex gap-5">
            <button className="w-36 h-10 bg-blue-500 text-white" type="submit">
              Oтправить
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/dashboard");
              }}
              className="w-36 h-10 bg-gray-300"
            >
              Go Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProfile;
