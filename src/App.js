import { AuthProvider } from "./context/AuthContext"
import { ClientsProvider } from "./context/ClientsContext"
import { AppRouter } from "./routers/AppRouter"
import "./styles/app.scss"

export const App = () => {
  return (
    <AuthProvider>
      <ClientsProvider>
        <AppRouter />
      </ClientsProvider>
    </AuthProvider>
  )
}