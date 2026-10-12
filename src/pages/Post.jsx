
import { useState } from "react";

function Post() {
  const [postType, setPostType] = useState("Question");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [abstract, setAbstract] = useState("");
  const [articleText, setArticleText] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    setMessage("");

    // Validate title
    const cleanTitle = title.trim();

    if (cleanTitle.length < 5 || cleanTitle.length > 150) {
      setMessage("Title must contain between 5 and 150 characters.");
      return;
    }

    // Validate tags: 1–3 comma-separated tags
    const tagList = tags.split(",").map((tag) => tag.trim());

    if (
      !tags.trim() ||
      tagList.length > 3 ||
      tagList.some((tag) => tag.length === 0)
    ) {
      setMessage(
        "Enter 1–3 tags separated by commas. Example: Java, React"
      );
      return;
    }

    // Validate Question
    if (postType === "Question") {
      if (description.trim().length < 10) {
        setMessage(
          "Your question description must contain at least 10 characters."
        );
        return;
      }
    }

    // Validate Article
    if (postType === "Article") {
      if (abstract.trim().length < 20) {
        setMessage(
          "Your abstract must contain at least 20 characters."
        );
        return;
      }

      if (articleText.trim().length < 30) {
        setMessage(
          "Your article text must contain at least 30 characters."
        );
        return;
      }
    }

    // Successful submission
    alert("Your post has been submitted successfully!");

    setTitle("");
    setDescription("");
    setAbstract("");
    setArticleText("");
    setTags("");
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <form
        onSubmit={handlePost}
        className="mx-auto max-w-5xl space-y-6"
      >
        <h1 className="bg-gray-200 px-3 py-2 text-xl font-bold">
          New Post
        </h1>

        <section>
          <p className="mb-3 font-semibold">
            Select Post Type:
          </p>

          <div className="flex flex-wrap gap-8">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="postType"
                value="Question"
                checked={postType === "Question"}
                onChange={() => {
                  setPostType("Question");
                  setMessage("");
                }}
              />
              Question
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="postType"
                value="Article"
                checked={postType === "Article"}
                onChange={() => {
                  setPostType("Article");
                  setMessage("");
                }}
              />
              Article
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="bg-gray-200 px-3 py-2 font-bold">
            What do you want to ask or share
          </h2>

          <p className="px-3 text-sm text-slate-600">
            This section changes according to the selected post type.
            <span className="block font-semibold text-red-600">
              {postType === "Question"
                ? "For a question, describe your problem below."
                : "For an article, provide an abstract and article text."}
            </span>
          </p>

          <div>
            <label
              htmlFor="title"
              className="mb-2 block font-semibold"
            >
              Title
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={
                postType === "Question"
                  ? "Start your question with how, what, why, etc."
                  : "Enter a descriptive title"
              }
              className="w-full rounded border border-gray-400 bg-white p-3"
              required
              minLength={5}
              maxLength={150}
            />
          </div>

          {postType === "Question" ? (
            <div>
              <label
                htmlFor="description"
                className="mb-2 block font-semibold"
              >
                Describe your problem
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Explain your question or problem..."
                className="min-h-64 w-full rounded border border-gray-400 bg-white p-3"
                required
                minLength={10}
                maxLength={5000}
              />
            </div>
          ) : (
            <>
              <div>
                <label
                  htmlFor="abstract"
                  className="mb-2 block font-semibold"
                >
                  Abstract
                </label>

                <textarea
                  id="abstract"
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                  placeholder="Enter a 1-paragraph abstract"
                  className="min-h-24 w-full rounded border border-gray-400 bg-white p-3"
                  required
                  minLength={20}
                  maxLength={2000}
                />
              </div>

              <div>
                <label
                  htmlFor="articleText"
                  className="mb-2 block font-semibold"
                >
                  Article Text
                </label>

                <textarea
                  id="articleText"
                  value={articleText}
                  onChange={(e) => setArticleText(e.target.value)}
                  placeholder="Write your article here..."
                  className="min-h-64 w-full rounded border border-gray-400 bg-white p-3"
                  required
                  minLength={30}
                  maxLength={10000}
                />
              </div>
            </>
          )}

          <div>
            <label
              htmlFor="tags"
              className="mb-2 block font-semibold"
            >
              Tags
            </label>

            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Add up to 3 comma-separated tags, e.g., Java, React"
              className="w-full rounded border border-gray-400 bg-white p-3"
              required
            />

            <p className="mt-1 text-sm text-slate-500">
              Separate tags with commas. Maximum 3 tags.
            </p>
          </div>
        </section>

        {message && (
          <p
            role="alert"
            className="font-semibold text-red-600"
          >
            {message}
          </p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded bg-[#12203A] px-12 py-3 font-semibold text-white hover:bg-[#2BB7A5] hover:text-[#12203A]"
          >
            Post
          </button>
        </div>
      </form>
    </main>
  );
}

export default Post;
