defmodule WebappWeb.PageController do
  use WebappWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def form(conn, _params) do
    render(conn, "form.html")
  end

  def show(conn, _params) do
    render(conn, "show.html")
  end
end
