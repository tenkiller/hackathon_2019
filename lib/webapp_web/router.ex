defmodule WebappWeb.Router do
  use WebappWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", WebappWeb do
    pipe_through :browser

    get "/", PageController, :form
    get "/show", PageController, :show
  end

  # Other scopes may use custom stacks.
  # scope "/api", WebappWeb do
  #   pipe_through :api
  # end
end
