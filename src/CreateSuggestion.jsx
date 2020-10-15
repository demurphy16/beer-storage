import React, { Component } from "react";
import axios from "axios";

class CreateSuggestion extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      abvInput: "",
      hopsInput: "",
    };
  }

  async getBeers() {
    const beerURL = `https://api.punkapi.com/v2/beers?abv_lt=${this.state.abvInput}&hops=${this.state.hopsInput}`;
    const response = await axios.get(beerURL);
    const userBeer = response.data;
    this.setState({ beers: userBeer });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getBeers();
    this.setState({ abvInput: "" });
    this.setState({ hopsInput: "" });
  }

  changeInput(event) {
    this.setState({ abvInput: parseInt(event.target.value) });
  }
  changeHops(event) {
    this.setState({ hopsInput: event.target.value });
  }

  render() {
    const { beers } = this.state;
    return (
      <div>
        <section className="just-form">
          <form className="sug-form" onSubmit={(e) => this.handleSubmit(e)}>
            <label htmlFor="hopsInput"></label>
            <input
              name="hopsInput"
              type="text"
              placeholder="Preferred Hops"
              onChange={(event) => this.changeHops(event)}
            />
            <label htmlFor="abvInput"></label>
            <input
              name="abvInput"
              type="text"
              placeholder="Max Alc%"
              onChange={(event) => this.changeInput(event)}
            />
            <button type="submit"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAt1BMVEUzTVz////vyEr09PQvSlpMYm/09fgkQ1Pvx0Lvxj7x2pTy47z5+fjy03ny8vPvx0enr7V1gov08+/vylb//fnv160bPU/v1qT568Dvy2N+i5T789ry03LxzWAoRVbz1oDk5+nFys26wcY/V2VpeYOWoKewuL3O1NdYbHiLl56eqK9hdH89VWQTOkxVaXX89ePb3+H24KT778/y3J345a/uwy702Yr78dX++vDv05Lv1Jzvz3ry5sOO9BsjAAAQFklEQVR4nNWd6YLaOBKADQgEHYMhJN7AgNqc5m7S6Ry7m/d/rpVtwLKRbVVJNmz9mEwSZtDXVapLl1UrW2zPn69X4+WmubCusmhuluPVeu57dunfb5X4//b89XbZpEeXUsYIIVYs/HeMUeoeaXO5XfteiaMoibDl9wdN4lKW4JIJR6UuaQ76fqucoZRB6K9OhKutiC3ByRVKTiu/hNGYJuytl9SlEDgBk/+Xy3XP8IiMEp53eyydQLnfnU0Oyhxhr7+hmnhXSLrpm9OkKcKZtvaSkO5+ZmhkRgi9leWaw7tAutbKSBAxQOgPmEH1CYyUDQw4V23C2YmyEvAiYfQ0ezDhfGHcPJNC3MX8gYSzZsl8EWNz9iBCf1MBX8S40ZiPaEJvWRFfxLhE+1Ukob11y/MvMmHuFllo4QjnB1opXyD0gHM5GMJKDTQWbqqYXA5BuD5Wa6CxsOO6AkJv7z6ILxB3D/Y4UMI1eZQCI2EEqkYYoT14yAwUhbgDmFMFEfoPcKH3Qg+g+A8hXD9cgZEQF2KpAMLxI11MUtxxCYS90zNY6FXoSTk0qhKercf60LQwotquUiScgbqfVQhhM5OEz+JjRFH1N0qEu+OjcaRy3Jki3D6PE02KuzVDuNV1osGiBGwZQ1WoAmIx4UAPkFC6GPf7/fGijJ4cHegTagKyuK/rrUrI2osRiwg1TdQdi5HZW5rPGgoNtYBQE/DO25XgtIoQ8wl3egNy7935lhJSuC6s/S3KhGu9OMhkc2RvHQ4HZnKhysrvbeQRzjRNisg6Do0eF8/vL80sNobiznCEZ80QxvInSG9tbEmOsJw0PJuwZ2l+v1vYNFqbKliIlV1MZROeNL+dHIoA+U9xYMi3shOccKwVJwh1j8tiQm1vfROaWfVnEa51vpnR/dr31KrwuSHEzFoqg9DX+F5Cx5C27dqlLmP68cPN6MDJCe0D/usIrNnHDXV99jzP32kuR5KDvI8qJ9RIt0kTvRXmvNGy2IwkXEqoMQnz/Hax6HVL5FNRRujhE0d2nGkA8vmvk2UQaRIlI9yjI6G71N2SNtcJUmyvRoi2UUI1N4YEohWHZXZ6T9jDFhRsYWKXlk2YizfV470XuCdcIm1Uw4kmpOfNxhY2OLL7ROqOEJtjkIPBra+NPjYnd+8mSpoQHeuzUgqk2Mic/D7upwmxjRm6MgrIpU8ZZkbetW1ShB7WRi3zByeCVG5rgX/i6bI0RYhyM4TRY984YCT2CvozTzubJCGmpCC0uZ3Pyjv7Ak5zUh4hSbiBuxnaLOOQRAIR+GMnm2xCRHMtu7Y2JyvgXEy23hKETbAKpS1R4wLsiZFmFiE82JNF+WfPuKyA/i8R9kXCBTz4GEi1FQQ8ExdyQswsrASw1oPGMHEmCoQnsAqJUsPQACF0ZERon8aEPjxfY8ZTNUOEFo1DWEw4gKcztKxMJiXwXFLw8TdCD5GvVaXDNcK8btnpjRAaVgMhsr5ICbJHpFq3H/6NELXSRCsJh6hsOQa7/IpbDaWIneVwgcdpSwgYV0KEIVhBRd0oHxDX3LzNoAthD1n5Sjo/pgXbXnR7CcI+tktJl+VORdseIBtH11B2IUQUhhdhuucDc+gaXNCE1zIxIjxrNJqJ22zYXBqmldloaBFal+0LEeFOp5VOmr1oMF9M8r3/aGkS0p1AiPOkKcLWpw9jfH9efr5cCSnLkvzdVRdvGhJiPemVsHEh/Pn6xwjfPy/1dvtKuBtnymBzcHNaqpE3DQkReV+C8KrDTrvzXY/xnx/ff0zanXa9fiUM53im1Br+qpm1yBHlIyHhUm8BPSas1zvtX381IL/9bLedeiA3wgLhLm6+kOcEUfkaEmruAhYJ+dA6znTy+tr9DiH7+OdCGP4vIIQBZC/jOA+9EupsLbHEeXgdnuO02+26Ot+X159gwtBIb7+Rd8bD3nBAiCmcEoQJHV6lo+pZ/3y02x0o4fU/vkDKc7swXgSE8AaNCmH9OmqpVb5fJuvb+696J/6sMmGcXlwYZQVI2K7hhC3NzUhZhI7zN5Nw2qkPR5PJaOgEfhNBGNlpjGhLm72kFRIiWlApwoaUsO4Ms7Kct3bwAwgkpW+op7FjLcosMWhIWRp1xY1QrsMcwo/UJ9GEEWOAaMsyz6C+sFBNNk3CL0NnWHfMEIaIwa++BCNouVmY9Zg0IdRKf9S73e5UQHQcjXh4UWJP4muCNRqr5ulutgbr8L3TDWQYf3DUfcMTNiIlSmtc4nFCzXgPJ/zdnoaEo5sSh92JJiFXoj2WmCmP+ZZm2g0n/NZ2UoRchVqEdjYhT76t2lZ3vzxwHnZ5pEhaKSfOI7wrKORmKnWmbMsJ9QoLK61DJ4vwzyWLeeWEw0l3MhQ+2c2Zh/4sLWevYUsIZeuovLywtF1pgtAZTrIIR9MvN8JkqOAyzSS0l0c3LWTT79l3hDIr5c7UsrUPzCWs9F9f/+3ICSfTWId3kh0PpX0aQhe+nSaUxnVqW572KWZBh87o69d/ZejQJCH/0qOAGBLKO6JHz9IOFo8htMiilyRsSKeb61ta244fSMhzTjtBeJZ/am5ph0NxHlZJSDYJHdryEomuLeheFRnhQ3TIM7IEobyrzVaWzMdWRejcwgaG0D1fAMOcRu5KLTa2tAM+ntAZBpmNgyac2QKhrLQIBre08KtOMSFyHg7j5E2LMHI08phANpZ2SoPWIU+4u9c6UctKc6YhH5y1kP7F/wMhO4vTMKthqM/3MCslC08g1E/NcglBOvxlyNOQvV1spA8h/FGPP6ATLdjKvqqQE+q7E3OE3+P+TEyKydpmdmykuj3fIkLQPLwjdIbTIcbTXDPvYAuBdqOigBCkw5dU1uZMAocKJmSDWuMmnsa5ZfOEF1966+iHHjW7T5NF6M7j+tDWOltfFuFkMoo+NMIRMrGNoZ+YFRAi4mEYCsMPTVGEV08afsTPDYYPyWnEdKYezMMJdB7eUrYgIOZVD4vH5KUJwvpoMmoDCdlAMNJzjgp5XvqY2kJI2EKn0/mWdrT5hNdgGKowr8TltUWF9aHYLx0lV5+cYdgvfou75vndxL2owrxYyOvD6mr8dtT0jricYXIFsT19//Pnm/BHuYSuoEJpJ/gmvMavrk/TeUnOtKQ4wX4FgTmPUF2FQZ+mul6b05m8v79kAN5JHqHYDc5XYdBrq65f2uZ66ggpm1O/X79QImRLUYX56QydV9fzfkmbJQ/1iQUoZUIqNvQLdiG4fnXrFi+jJM3wltYACdlYTGcKFHT0zK495RJOEgTJoA8hjDvB/G+L9v5S2+z6YT5hAgZNSMWMdFagn2D90OgacC5hqvJFWimxGoIUbckL14BNruPnEXZDNxq3ZoQ+FIQQVheG6/gm92Lkx8Pgz7ht3uajkxMssggTKXej8LqncC+Gyf00RYSXYjAHrICQWELVZBdvjA3305jcE5UinN7pcJLaDQUlFJZFGw2FQ6HhniiT+9oKrVSTkIkJacZ6WnJopvcmJgnrbXHX/lDfSgkTQ6HCkcnL3kSD+0tThJ33GPBPlHJPBU8DJhT9aMbOhKRc9pea3CM8/Pr1P0JdOxLC4aWJmJdtFxC6K9FGVfbfX/YIm9zn7Uz/Kw4zKgkDySoLAYR0LGowrzkTD61lfq++k9RQ51c4Fb98yLYnwAjpXuArTkjDkV326uudzcvZfRkOtP76/ePXEKrBe0K674mASs7jdt7C+JkZUYLjM+1kzq00FVOE7iChwbOS2d3OzJg991QoPCZOgYSE7hL7LW21Hujt3JPJs2uFEi41ZRdNUsLgnU4RUPF+ZeHsmrHzhwqEUdFUHBNjwiNL7ibN2uB1J8L5Q1NnSEsh3PZTO4IbnuIlC8IZUlPngJXmIdBKG/f7uhWvzRPPAZs5y61IOOSIo8u/O05hBXwnym9kJM5y65zHB1ppRBb9c3hdJgUQqq/3UvE8vsadCvBocZNh3ozMIFSpKC7DStypoFVfYAmd3GJRTmir36KYuhdDx5tWSGif1S8KSt1touNNEfMwIpzm9RNlhAAN3t1Po/PiCnoehoEjq58oIbRngAuU7+4Ywt0TpUmYXibNJ+T1hPoY7++J0jiyjifMkzSh3QC9Eiq56wtzX9uVEDcPQYS2vwCpQHJfG77lVoEO7d4Wdoe57M49fEOqdELbXsMUmHFvIrpdU7KVcr7M+1kyhyS9+xIdMMrVod0n8Ev2M+4vxd1tVzohwj9k3UGLfTSgbEL4zz3zHmHkGk258xBBmH0XNHImPp0Oc+7zxpWJz0aYdyc7rjf8bFaae68+6m2EJ9Nh/tsIqPctboR/jRJ+RxIWvG+BeaPkRvjbJGHnE46w6I0SzDsz13nYaBjV4VsDQ1j8zgzm+YDr3Zetrtryroo4wxaKsPitIISziQkNmmnnA0Wo8t4T/M2uGyFXInipN0Oc4a10AhEqvdkFfnctnoeNN8VtCIWAnd8tDKHau2vg66WFGypav9smEJ2rIw0IAYubqm/n1aDvH7rxPp7WG2LJPi3t9t+4g9FTLwfU3z+E2ql4+qH1+Uen03Y0pNP59Vlo0XjqAVr9DUvoO6QssdGl9fnT63SIlWn30+eW2INSX1GBvEMKjftU3AjCGfkQPyOl1Wolu4jKRgp7SxZYZKR2ShgU9cU04HvA0KlIziUhZtznIQMEvukMvLCfbHrFo0WIehsK/i438G11OigD0VaudDBvq9d6oNUouu+ZNlTbVrajvHeWswlrZ1DgZ2Quue9Ph099LYaQnGeIcwiBrTfibuZe7gXqEPFmS/UXrJPNNQBhbQ0rMwi1NuNVX19W2/0C8EL3Mfe1m1xCxR1yIiRjVF+CVw/Uv9Pd5TLkE6Kflq1Q7hozMMLnRywCLCQEJuGVS0a6DSF8bsRiQAXCZzbUQhNVI1Te7li5uAqASoS1XZlXheHlmB8mIIS8lir3ihuMkMx6CUNYmwGbU+ULITO1oSsS1s5WqbdpgYVZOck2irDWOz2TS6Wn7HIJS8ir/udxqUpOFE74NP5G1cfACWv+4RkslR5A79WDCGv24OFqJO4A9gwhjJBbKnmsT2UE+rgrlLDm7R/pcNy9bPHFLGHQ23iUGll+v8IYYa0HaBIZFOIulYOgJmGtNn+AU6UH3JOuOMKavXWrNVXmbpEvuSIJucep0lS5gYI9jDYhj/+bihiJuwHFeGOEvKZqVsBIgnPOGqJFyF0OpDeN49N9M1qTkOvxRMvzOYyeZroD1Cbk83HA4OcFFIRQNtCYfwYJuV9dWcaNlbjWCu0/RTFCyGW2dw0qklB3PzM0MlOEPJfrb8xYK7fOTR+Tn8nFHCGX805bk4H2dqpNJiUxSsilt15SLCWno8u1Oe1FYpowEH93IpSqH0oO4Bil5LQz4DrvpAxCLi2/P2gSlxYv5hIO55LmoO+3yhlKSYSheP56u2zSoxutWyduByTherh7pM3ldu0bCQsZUiZhJLbnz9er8XLTjC+4XzQ3y/FqPfc9ZEkEkP8BGmvWv1aR/kAAAAAASUVORK5CYII=" alt="beer button"></img></button>
          </form>
        </section>
        <div className="sug2-container">
          {beers.slice(0, 3).map((beer, index) => (
            <div className="suggestion-container" key={index}>
              <p className="suggestion-p sug-name">{beer.name}</p>
              <p className="suggestion-p sug-abv">{beer.abv}</p>
              <p className="suggestion-p sug-tag">{beer.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default CreateSuggestion;
