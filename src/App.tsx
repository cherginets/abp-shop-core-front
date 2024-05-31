import {Preloader} from "./components/Preloader";
import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import {useLoader} from "./hooks/useLoader";

function App() {
  const onClick = (variant: string) => {
    console.log(`${variant} button clicked`);
  };

  return (
    <>
      <Stack direction={'column'} spacing={2} style={{width: '50%', margin: "20 auto auto"}}>
        <h2>Components</h2>
        <Example title={'Preloader'}>
          <Preloader/>
        </Example>

        <h2>Hooks</h2>
        <Example title={'useLoader'}>
          <ExUseLoader/>
        </Example>
      </Stack>

    </>
  );
}

const Example = ({title, children}: {title: string, children: any}) => {
  return <Grid container spacing={1}>
    <Grid item xs={12}>
      <Typography variant={'h5'}>{title}</Typography>
    </Grid>
    <Grid item xs={12}>
      {children}
    </Grid>

  </Grid>
}

const ExUseLoader = () => {
  const {start, stop, loading, Preloader} = useLoader(true);
  return <Stack direction={'row'} spacing={1} alignItems={'center'}>
    <Button onClick={start}>start</Button>
    <Button onClick={stop}>stop</Button>
    <span>loading = {String(loading)}</span>
    <Preloader />
  </Stack>
}

export default App;
