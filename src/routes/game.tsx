import { createFileRoute } from '@tanstack/react-router'
import Game from '~/components/view/game'

export const Route = createFileRoute('/game')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Game />
}
