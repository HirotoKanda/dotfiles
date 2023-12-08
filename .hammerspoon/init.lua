local application = require("hs.application")
local spaces = require("hs.spaces")
local double_press = require("doublePress")

function MoveActiveScreen(app)
    local window = app:focusedWindow()

    local focused = spaces.focusedSpace()

    spaces.moveWindowToSpace(window:id(), focused)
    window:focus()
end

local OpenTerminal = function()
    local appName = 'kitty'
    local app = application.find(appName)
    if app == nil then
        application.launchOrFocus(appName)
    elseif app:isFrontmost() then
        app:hide()
    else
        MoveActiveScreen(app)
    end
end

double_press.timeFrame = 0.5
double_press.action = OpenTerminal
