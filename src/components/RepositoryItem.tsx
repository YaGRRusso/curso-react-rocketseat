interface RepositoryItemProps {
  repo: {
    name: string
    description: string
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (

    <li>
      <strong>{props.repo?.name}</strong>
      <p>{props.repo?.description ?? '-- Descrição Vazia --'}</p>
      <a href={props.repo?.html_url}>
        Acessar
      </a>
    </li>

  );
}