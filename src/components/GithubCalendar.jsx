import { GitHubCalendar } from "react-github-calendar";

export default function GithubCalendarComponent() {
    return (
        <div className="flex flex-col items-center py-10">
            <h2 className="text-4xl font-bold mb-8">
                GitHub Contributions
            </h2>

            <div className="bg-black p-5  rounded-2xl overflow-x-auto max-md:w-[600px]  max-sm:w-[500px]">
                <GitHubCalendar
                    username="athulcoder"
                    colorScheme="dark"
                    fontSize={14}
                />
            </div>

            <a href="https://github.com/athulcoder" target="_blank" className="px-4 py-2 rounded-2xl bg-white text-black  cursor-pointer hover:bg-black duration-700 hover:text-white hover:border-[1px] ">See my github</a>
        </div>
    );
}